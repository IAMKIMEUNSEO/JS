function test(){
    // 영단어
    const engArray = [
        'vulnerable', 'depend', 'mandatory', 'ambiguous', 'susceptible',
        'obsolete', 'tangible', 'lucrative', 'obscure', 'dispose',
        'precarious', 'alleviate', 'capricious', 'hinder', 'dormant',
        'exhaust', 'substantial', 'affect', 'scrutinize', 'thrive',
        'candid', 'futile', 'discrimination', 'negligible', 'inadvertently',
        'alter', 'meticulous', 'scrupulous', 'versatile', 'account',
        'exclusive', 'restrain', 'anonymous', 'hereditary', 'unprecedented',
        'impartial', 'biased', 'irrelevant', 'homogeneous', 'insignificant'
    ]
    
    document.write('<h1>Day01</h1>');
    document.write('<hr>');

    let engNum = [];   // 랜덤으로 추출할 engArray의 index값을 저장 ex)engArray[2], engArray[1] ... 

    while(engNum.length < engArray.length){   // length로 개수 확인
        for (i=0; i<engArray.length; i++) {
            let num = (Math.floor(Math.random() * engArray.length))
            // 중복 제거
            if(engNum.indexOf(num) == -1){   // 숫자 안에 ❌
                engNum.push(num);   // 배열 engNum에 변수 num의 값 push(저장)
            }
        }
    }
    
    for(i=0; i<engArray.length; i++){
        document.write(i+1 + ": " + engArray[engNum[i]] + '<br />');
    }
}
