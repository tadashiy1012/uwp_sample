(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.arguments) {}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {}
		}
		if (!args.detail.prelaunchActivated) {}
		if (isFirstActivation) {
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}
		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
		    // TODO: アプリが表示されるようになりました。ここでビューを最新の情報に更新することができます。
		    var count = 0;
		    var countOut = document.getElementById('countOut');
		    var btn = document.getElementById('countBtn');
		    btn.addEventListener('click', function () {
		        count += 1;
		        while (countOut.firstChild) {
		            countOut.removeChild(countOut.firstChild);
		        }
		        var countTxt = document.createTextNode(count);
		        countOut.appendChild(countTxt);
		    });
		}
	}

	app.oncheckpoint = function (args) {};

	app.start();

})();
