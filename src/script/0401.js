		// カウントダウンのターゲット日を設定する
		let targetYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();

		// 現在の月が4月以降であれば、翌年のエイプリルフールをカウントする
		if (currentMonth >= 3) {
		targetYear++;
		}
		let targetDate = new Date(`April 1, ${targetYear} 00:00:00`).getTime();

		// カウントダウンのタイマーを開始する
		let countdownTimer = setInterval(function() {

		// 現在の日付と時間を取得する
		const now = new Date().getTime();

		// ターゲット日までの残り時間を計算する
		let timeRemaining = targetDate - now;

		// 残り時間が負数になった場合は次年度のエイプリルフールに更新する
		if (timeRemaining < 0) {
			targetYear++;
			targetDate = new Date(`April 1, ${targetYear} 00:00:00`).getTime();
			timeRemaining = targetDate - now;
		}

		// 日数、時間、分、秒を計算する
		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

		// HTMLの要素を更新する
		document.querySelector('#day').innerHTML = days.toString();
		document.querySelector('#hour').innerHTML = padZero(hours);
		document.querySelector('#min').innerHTML = padZero(minutes);
		document.querySelector('#sec').innerHTML = padZero(seconds);

		}, 1000);

		// 数字が1桁だった場合に頭に0を付けるためのヘルパー関数
		function padZero(num) {
		return (num < 10 ? '0' : '') + num;
        }