function test(data) {
	const container = document.createElement('div');
	
	const p1_container = document.createElement('div');
	const p1_q = document.createElement('div');
	p1_q.appendChild(new Text('>>> data.getUserById(3);'));
	p1_container.appendChild(p1_q);
	const p1_a = document.createElement('pre');
	p1_a.appendChild(new Text(JSON.stringify(data.getUserById(3), null, '	')));
	p1_container.appendChild(p1_a);
	container.appendChild(p1_container);
	
	const p2_container = document.createElement('div');
	const p2_q = document.createElement('div');
	p2_q.appendChild(new Text('>>> data.getAlbumById(36);'));
	p2_container.appendChild(p2_q);
	const p2_a = document.createElement('pre');
	p2_a.appendChild(new Text(JSON.stringify(data.getAlbumById(36), null, '	')));
	p2_container.appendChild(p2_a);
	container.appendChild(p2_container);
	
	const p3_container = document.createElement('div');
	const p3_q = document.createElement('div');
	p3_q.appendChild(new Text('>>> data.getUserAlbums(data.getUserById(3));'));
	p3_container.appendChild(p3_q);
	const p3_a = document.createElement('pre');
	p3_a.appendChild(new Text(JSON.stringify(Array.from(data.getUserAlbums(data.getUserById(3))), null, '	')));
	p3_container.appendChild(p3_a);
	container.appendChild(p3_container);
	
	const p4_container = document.createElement('div');
	const p4_q = document.createElement('div');
	p4_q.appendChild(new Text('>>> data.getAlbumTitle(data.getAlbumById(36));'));
	p4_container.appendChild(p4_q);
	const p4_a = document.createElement('pre');
	p4_a.appendChild(new Text(JSON.stringify(data.getAlbumTitle(data.getAlbumById(36)), null, '	')));
	p4_container.appendChild(p4_a);
	container.appendChild(p4_container);
	
	const p5_container = document.createElement('div');
	const p5_q = document.createElement('div');
	p5_q.appendChild(new Text('>>> data.getIdOfUserWithAlbums();'));
	p5_container.appendChild(p5_q);
	const p5_a = document.createElement('pre');
	p5_a.appendChild(new Text(JSON.stringify(Array.from(data.getIdOfUserWithAlbums()), null, '	')));
	p5_container.appendChild(p5_a);
	container.appendChild(p5_container);
	
	return container;
}
