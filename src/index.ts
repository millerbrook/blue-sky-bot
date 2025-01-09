import Bot from "./lib/bot.js";
import getPostText from "./lib/getPostText.js";
import { CronJob } from 'cron';

const runOnce = async () => {
	const text = await Bot.run(getPostText);
//	const text = await Bot.run(getPostText, { dryRun: true} );

	console.log(`[${new Date().toISOString()}] Posted: "${text}"`);
}

const scheduleExpressionMinute = '* * * * *';
const scheduleExpression: string = '0 */24 * * *';
const job = new CronJob(scheduleExpression, runOnce);
job.start();
