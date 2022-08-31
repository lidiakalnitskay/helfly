//кнопки Читать еще - Скрыть
    let dots = document.getElementById('dots');
    let hiddenText = document.getElementById('hidden-text');
    let hiddenhParagraph = document.getElementById('hidden-paragraph');
    let btnMore = document.getElementById('btn-more');
    let btnHidden = document.getElementById('btn-hidden');

    btnMore.addEventListener('click', ()=>{
        dots.classList.add('hidden');
        hiddenText.classList.add('active');
        hiddenhParagraph.classList.add('active-block');
        btnHidden.classList.remove('hidden');
        btnHidden.classList.add('active-block');
        btnMore.classList.add('hidden');
    })

    btnHidden.addEventListener('click',()=>{
        dots.classList.remove('hidden');
        hiddenText.classList.remove('active');
        hiddenhParagraph.classList.remove('active-block');
        btnHidden.classList.remove('active-block');
        btnHidden.classList.add('hidden');
        btnMore.classList.remove('hidden');
        btnMore.classList.add('active');
    })

    let hiddenParagraphTwo = document.getElementById('hidden2-paragraph');
    let btnMoreTwo = document.getElementById('btn2-more');
    let btnHiddenTwo = document.getElementById('btn2-hidden');

    btnMoreTwo.addEventListener('click', ()=>{
        hiddenParagraphTwo.classList.add('active-block');
        hiddenParagraphTwo.classList.remove('hidden');
        btnHiddenTwo.classList.remove('hidden');
        btnHiddenTwo.classList.add('active-block');
        btnMoreTwo.classList.add('hidden');
    })

    btnHiddenTwo.addEventListener('click',()=>{
        hiddenParagraphTwo.classList.remove('active-block');
        hiddenParagraphTwo.classList.add('hidden');
        btnHiddenTwo.classList.remove('active-block');
        btnHiddenTwo.classList.add('hidden');
        btnMoreTwo.classList.remove('hidden');
        btnMoreTwo.classList.add('active');
    })


    //кнопка выбрать
    let btnOne = document.getElementById('btn-green-one');
    let btnTwo = document.getElementById('btn-green-two');

console.log(btnOne, btnTwo)

    btnOne.addEventListener('click', ()=>{
        btnOne.classList.toggle('green');
    })
    btnTwo.addEventListener('click', ()=>{
        btnTwo.classList.toggle('green');
    })


    // Показать больше - блок о фотографе
    let more = document.getElementById('photographer-more');
    let textMore = document.getElementById('photographer-text');

    more.addEventListener('click', ()=>{
        textMore.classList.toggle('hidden');

        if (more.innerHTML === 'Показать больше информации о фотографе') {
            more.innerHTML='Скрыть информацию о фотографе';
        }else{
            more.innerHTML='Показать больше информации о фотографе';
        }

    })

    //показать еще - отзывы
    const blockHidden = document.getElementById('block-hidden');
    let btnBlockMore = document.getElementById('btn-block-more');
    let imgMore = document.querySelectorAll('.rewiews__container img')

    blockHidden.style.display=('none');
    console.log(imgMore)

    btnBlockMore.addEventListener('click', ()=>{ 
        if (btnBlockMore.innerHTML === 'Показать все (134)') {
            blockHidden.style.display=('flex');
            btnBlockMore.innerHTML= 'Скрыть все (133)';
            
            for (let i = 0; i < imgMore.length; i++) {
                const element =  imgMore[i];
                element.style.transform = `rotate(180deg)`;
                
            }

        } else {
            blockHidden.style.display=('none');
            btnBlockMore.innerHTML='Показать все (134)';
        }
    })

