addEventListener("contextmenu", (event) => event.preventDefault());
addEventListener("mousedown", (ev) => {
	if (ev.button === 2) return;
	const mousemove = (event) => {
		console.clear();
		console.log(new Date().getMilliseconds());
	};
	const stop = () => {
		removeEventListener("mousemove", mousemove);
		removeEventListener("mouseup", mouseup);
	};
	const mouseup = (event) => {
		if (event.button === 0) stop();
	};
	addEventListener("mousemove", mousemove);
	addEventListener("mouseup", mouseup);
	addEventListener("blur", stop);
});
