let Parent = document.querySelector("div.wrapper > div.parent");
let Child = document.querySelector("div.wrapper > div.parent > div.child");

Child.addEventListener("mousemove", (e) => {
	Parent.style.background = `linear-gradient(to bottom, rgb(${
		(e.x - e.target.offsetLeft) / 0.5
	}, ${(e.y - e.target.offsetTop) / 0.3}, ${
		(e.x - e.target.offsetLeft) / 0.8
	}), rgb(${(e.x - e.target.offsetLeft) / 0.3}, ${
		(e.y - e.target.offsetTop) / 0.4
	}, ${(e.x - e.target.offsetLeft) / 0.5}), rgb(${
		(e.x - e.target.offsetLeft) / 0.7
	}, ${(e.y - e.target.offsetTop) / 0.2}, ${
		(e.x - e.target.offsetLeft) / 0.1
	}))`;
	Child.style.borderRadius = `${e.x - e.target.offsetLeft}px ${
		e.y - e.target.offsetTop
	}px`;
});
