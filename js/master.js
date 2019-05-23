sw = screen.width;
sh = screen.height;

brain = document.getElementById('brainyThings');
// 60% screen width and width of text is 5 times its height
brain.style.fontSize = sw * 0.6 / 5 + 'px';
brain.style.margin = '0px ' + sw * 0.03 + 'px';
brain.style.lineHeight = sw * 0.2 + 'px';

logo = document.getElementById('logo');
logo.style.height = sw * 0.2 + 'px';
logo.style.width = sw * 0.2 + 'px';
logo.style.margin = '0px ' + sw * 0.03 + 'px';

cls = document.getElementById('clsName');
clsSpan = document.querySelector('#clsName span');
clsSpanLen = clsSpan.innerHTML.length;
if (clsSpanLen < 20) {
	cls.style.fontSize = (sw * 0.6 / Math.max(10, clsSpanLen) * 2) + 'px';
} else {
	cls.style.fontSize = (sw * 0.8 / clsSpanLen * 2) + 'px';
}

pkg = document.getElementById('pkgName');
pkgSpan = document.querySelector('#pkgName span');
pkgSpanIn = pkgSpan.innerHTML.trim();
pkgSpanLen = 9;
for (i = 0; i < pkgSpanIn.length; i++) {
	if (pkgSpanIn[i] == '<') {
		while (pkgSpanIn[++i] != '>');
		i++;
	}
	pkgSpanLen++;
}
if (pkgSpanLen < 20) {
	pkg.style.fontSize = (sw * 0.6 / Math.max(10, pkgSpanLen) * 2) + 'px';
} else {
	pkg.style.fontSize = (sw * 0.8 / pkgSpanLen * 2) + 'px';
}

ext = document.getElementById('extends');
ext.style.fontSize = pkg.style.fontSize;

vis = document.getElementsByClassName('heading');
for (var i = 0; i < vis.length; i++) {
	vis[i].onclick = function makeVis(){
		this.nextSibling.nextSibling.style.display = "block";
		this.onclick = function makeInv() {
		this.nextSibling.nextSibling.style.display = "none";
			this.onclick = makeVis;
		};
	};
}