function mostrarPares(){
    
    let n  = parseInt(document.getElementById('num').value,10);
    var list = []; 

    for(let i = 0; i <= n; i++){
        // 0, 1, 2 
        if ( i % 2 ==0 ){
            list.push(i);
        }

    }

    

    // alert(list);


}