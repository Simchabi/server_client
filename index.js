//

let tranlate_btn, input_user, select_lang, p_ans;
init = () => {
    tranlate_btn = document.getElementById("translate_btn")
    input_user = document.getElementById("text_user")
    select_lang = document.getElementById("langs")
    p_ans = document.getElementById("translation")
    tranlate_btn.onclick = translate_fn
}

async function translate_fn (){
    text_to_translate = input_user.value
    dst_lang = select_lang.value
 //generate url

 url = 'localhost/expression'
// console.log(url)

 data={text_to_translate,dst_lang}
 res = await axios.post(data)
 console.log(res.data.responseData.translatedText)

 text_ans = res.data.responseData.translatedText
 selected_index = select_lang.selectedIndex
 lang_text = select_lang.childNodes[1+2*selected_index].innerText
 console.log(selected_index)
 p_ans.innerText = `${lang_text} :  ${text_ans}`
}


// ball = {}
// ball.x = 50
// ball.y = 20
// ball.dir = 1
// ball.move = (dx, dy, width) =>{
//     ball.x += dx*ball.dir
//     ball.y += dy
//     if(ball.x > width) {
//         ball.dir *= -1
//     }
// }

// ball.move(10, 10)