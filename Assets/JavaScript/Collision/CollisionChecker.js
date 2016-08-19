var colliders = [];
var enemyColliders = [];

var collisionChecker = {
	addCollider: function (objectBitmap) {
		var index = colliders.indexOf(objectBitmap);
		if (index == -1) {
			colliders.push(objectBitmap);
		}
	},
	removeCollider: function (objectBitmap) {
		var index = colliders.indexOf(objectBitmap);
		if (index != -1) {
			colliders.splice(index, 1);
		}
	},
	clearColliders: function () {
		colliders = [];
	},
	addEnemyCollider: function (enemyBitmap) {
		var index = enemyColliders.indexOf(enemyBitmap);
		if (index == -1 ) {
			enemyColliders.push(enemyBitmap);
		}
	},
	removeEnemyCollider: function (enemyBitmap) {
		var index = enemyColliders.indexOf(enemyBitmap);
		if (index != -1) {
			enemyColliders.splice(index, 1);
		}
	},
	clearEnemyColliders: function () {
		enemyColliders = [];
	},
	collidingWith: function (bitmapChecking, alphaThreshold) {
		for (i = 0; i < colliders.length; ++i) {
			var collider = colliders[i];
			if (collider != bitmapChecking && ndgmr.checkPixelCollision(bitmapChecking, collider, alphaThreshold)) {
				return collider;
			}
		}
		return null;
	},
	collisionPoint: function (bitmapChecking) {
		for (i = 0; i < colliders.length; ++i) {
			var collider = colliders[i];
			if (collider != bitmapChecking) {
				var intersection = ndgmr.checkRectCollision(bitmapChecking, collider);
				if (intersection != null) {
					return intersection;
				}
			}
		}
		return null;
	},
	isColliding: function (bitmapChecking, alphaThreshold) {
		for (i = 0; i < colliders.length; ++i) {
			var collider = colliders[i];
			if (collider != bitmapChecking && ndgmr.checkPixelCollision(bitmapChecking, colliders[i], alphaThreshold)) {
				return true;
			}
		}
		return false;
	},
	pushBackIfColliding: function (bitmapChecking) {
		var collision = collisionChecker.collisionPoint(bitmapChecking);
		if (collision != null) {
			if (collision.width > collision.height) {
				bitmapChecking.y += collision.height;
			}
			else {
				bitmapChecking.x -= collision.width;
			}
		}
	},
	isCollidingWithEnemy: function (bitmapChecking, alphaThreshold) {
		for (i = 0; i < enemyColliders.length; ++i) {
			var collider = enemyColliders[i];
			if (collider != bitmapChecking && ndgmr.checkPixelCollision(bitmapChecking, collider, alphaThreshold)) {
				return true;
			}
		}
		return false;
	}
}