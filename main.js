function get_users(id) {
	for (user of users) {
		if (id === user["id"]) {
			return user;
		}
	}
	return users;
}

function get_albums(id) {
	for (album of albums) {
		if (id === album["id"]) {
			return album;
		}
	}
	return albums;
}

function get_user_albums(user) {
	var user_albums = [];
	var user_id = user["id"];
	for (album of albums) {
		if (user_id === album["userId"]) {
			user_albums.push(album);
		}
	}
	return user_albums;
}

function get_album_title(album) {
	return album["title"];
}

function get_users_with_album() {
	var user_ids = [];
	for (album of albums) {
		var album_user_id = album["userId"];
		var is_unique = true;
		for (user_id of user_ids) {
			if (album_user_id === user_id) {
				is_unique = false;
			}
		}
		if (is_unique) {
			user_ids.push(album_user_id);
		}
	}
	return user_ids;
}

