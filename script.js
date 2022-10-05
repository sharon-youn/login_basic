console.log('잘 불러왔니?')

let elInputUsername = document.querySelector('#username')
console.log(elInputUsername)

let elFailureMessage = document.querySelector('.failure-message')
console.log(elFailureMessage)
 

let elSuccessMessage = document.querySelector('.success-message')
console.log(elSuccessMessage)
 
// css에 작성하는 대신 style에 display = none 치면 됨! 
// elFailureMessage.style.display = 'none'

// hide class를 지우면 보일것임!
// elFailureMessage.classList.remove('hide')


//아이디 입력창(elInputUsername)에 글자를 키보드로 입력할때
elInputUsername.onkeyup = function() {
    // 입력값을 콘솔창에 칠 수 있음
    // console.log(elInputUsername.value)
    if(isMoreThan4Length(elInputUsername.value)) {
        // console.log('4글자보다 크네')
        elSuccessMessage.classList.remove('hide')
        // 실패메시지가 가려져야함
        elFailureMessage.classList.add('hide')
    } else {
        // console.log('짧다..')
        elSuccessMessage.classList.add('hide')
        //실패 메시지가 보여야함
        elFailureMessage.classList.remove('hide')

    }
} 
// 글자수가 4개 이상이면!
function isMoreThan4Length(value) {
    return value.length >= 4
}