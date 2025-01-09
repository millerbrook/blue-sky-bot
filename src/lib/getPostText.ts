interface Dictionary<T> {
	[key: string]: T
}

let data: Dictionary<string> = {
	post1: 'silly post',
	post2: 'serious post',
	post3: 'profound post'
}
export default async function getPostText() {
	let post_keys = Object.keys(data);
	let random_key = post_keys[Math.floor(Math.random()*post_keys.length)];
  return `Practice bot post: random key ${random_key}; message: ${data[random_key]}`;
}
