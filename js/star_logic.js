(function() {

    const allStar = document.querySelectorAll(".star");
    count_op = document.getElementById("count_op");
    // console.log(count_op);
    allStar.forEach((star, i) => {
        star.onclick = function() {
            let current_star = i + 1;
            count_op.innerHTML = current_star;
            allStar.forEach((star, j) => {
                if (current_star >= j + 1) {
                    star.innerHTML = '&#9733'
                } else {
                    star.innerHTML = '&#9734'
                }
            })
        }
    })



})()