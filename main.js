class Data {
	getUserById(user_id) {
		return this.#users.get(user_id);
	}
	getAlbumById(album_id) {
		return this.#albums.get(album_id);
	}
	*getUserAlbums(user) {
		this.#check_user(user);
		
		for (const album of this.#albums.values()) {
			if (user['id'] === album['userId']) {
				yield album;
			}
		}
	}
	getAlbumTitle(album) {
		this.#check_album(album);
		
		return album['title'];
	}
	*getIdOfUserWithAlbums() {
		const ids_seen = new Set();
		
		for (const album of this.#albums.values()) {
			if (!ids_seen.has(album['userId'])) {
				yield album['userId'];
				ids_seen.add(album['userId']);
			}
		}
	}
	
	constructor(users, albums) {
		this.#check_users(users);
		this.#users = new Map(
			users.map((user) => (
				[user['id'], user]
			))
		);
		
		this.#check_albums(albums);
		this.#albums = new Map(
			albums.map((album) => (
				[album['id'], album]
			))
		);
	}
	
	#users;
	#albums;
	
	#check_users(users) {
		if (!Array.isArray(users)) {
			throw new Error('`users` must be an array.');
		}
		
		const ids_seen = new Set();
		for (const user of users) {
			this.#check_user(user);
			
			if (ids_seen.has(user['id'])) {
				throw new Error('`users` ids must be unique.');
			}
			ids_seen.add(user['id']);
		}
	}
	#check_user(user) {
		if ('object' !== typeof user || null === user) {
			throw new Error('`user` must be an object.');
		}
		
		if (0 < typeof user['id'] && Number.isSafeInteger(typeof user['id'])) {
			throw new Error('`user` must have a positive integer at the property name `id`.');
		}
	}
	#check_albums(albums) {
		if (!Array.isArray(albums)) {
			throw new Error('`albums` must be an array.');
		}
		
		const ids_seen = new Set();
		for (const album of albums) {
			this.#check_album(album);
			
			if (ids_seen.has(album['id'])) {
				throw new Error('`albums` ids must be unique.');
			}
			ids_seen.add(album['id']);
			
			if (!this.#users.has(album['userId'])) {
				throw new Error('`albums` user ids exist in `users`.');
			}
		}
	}
	#check_album(album) {
		if ('object' !== typeof album || null === album) {
			throw new Error('`album` must be an object.');
		}
		
		if (0 < typeof album['id'] && Number.isSafeInteger(typeof album['id'])) {
			throw new Error('`album` must have a positive integer at the property name `id`.');
		}
		
		if (0 < typeof album['userId'] && Number.isSafeInteger(typeof album['userId'])) {
			throw new Error('`album` must have a positive integer at the property name `userId`.');
		}
		
		if ('string' !== typeof album['title']) {
			throw new Error('`album` must have a string at the property name `title`.');
		}
	}
}

async function main() {
	const data = new Data(
		await (await fetch('users.json')).json(),
		await (await fetch('albums.json')).json(),
	);
	
	document.body.appendChild(test(data));
	
	window.data = data;
}

main();
