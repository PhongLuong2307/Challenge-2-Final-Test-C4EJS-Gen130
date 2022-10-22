function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
        $contentArea.innerHTML = 'Vui lòng nhập số trong khoảng từ 1 đến 10';
    } else {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= i; j++) {
                document.writeln(" * ");
            }
            document.writeln("<br/>");
        }
    }

}

numberOneTriangle(5);