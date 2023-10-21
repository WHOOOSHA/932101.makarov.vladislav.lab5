numForHide = undefined;

function showNews(num){
    let news = document.getElementById(num);
    news.style.display = "block";
    let hidden = document.getElementsByClassName("forHidden")
    hidden[0].style.display = "block";
    numForHide = num;
}

function hideNews(){
    let news = document.getElementById(numForHide);
    news.style.display = "none";
    let hidden = document.getElementsByClassName("forHidden")
    hidden[0].style.display = "none";
}