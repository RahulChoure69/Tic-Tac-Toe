var clicks = [];
var xRow = ["X","X","X"];
var oRow = ["O","O","O"];
var cols = ["first-col","second-col","third-col"];
var rows = ["first-row","second-row","third-row"];
var diags = ["left-diag","right-diag"];
$("td").on("mouseenter",function(){
    $(this).addClass("mouse-over");
    $(this).on("mouseleave",function(){
        $(this).removeClass("mouse-over");
    });
});

$("td").click(function(){
    $(this).removeClass("mouse-over");
    $(this).addClass("clicked");
    $(this).removeClass("unclicked");
    checkWinner();
    clicks.push("1");
    var letter = this.innerHTML;
    if(clicks.length===9){
        $("h1").html("Draw");   
    }
    if(letter=='X'){
        $(".unclicked").html("O");
    }else{
        $(".unclicked").html("X");
    }
});


function checkWinner(){
    var rowData = [];
    var colData = [];
    var diagData = [];
    for(var i = 0 ; i<rows.length ; i++){
        var rowLength = document.querySelectorAll("."+rows[i]+" td.clicked").length ;
        if(rowLength===3){
            for( var j=0 ; j<3 ; j++ ){
                var answerRow = document.querySelectorAll("."+rows[i]+" td.clicked")[j].innerHTML;
                rowData.push(answerRow);
           
              }
              if(rowData.toString()==xRow.toString() || rowData.toString()==oRow.toString()){
                console.log("true");
                var winnerSymbol = rowData[0];
                $("h1").html(winnerSymbol+" Wins");
                }
        }
        var colLength = document.querySelectorAll("."+cols[i]+".clicked").length ;
        if(colLength===3){
            for( var n=0 ; n<3 ; n++ ){
                var answerCol = document.querySelectorAll("."+cols[i]+".clicked")[n].innerHTML;
                colData.push(answerCol);
           
              }
              if(colData.toString()==xRow.toString() || colData.toString()==oRow.toString()){
                console.log("true");
                var winnerSymbol = colData[0];
                $("h1").html(winnerSymbol+" Wins");
                }
        }
        
    }
    for( var k = 0 ; k<2 ; k++){
        var diagLength = document.querySelectorAll("."+diags[k]+".clicked").length ;
        if(diagLength===3){
            for( var m=0 ; m<3 ; m++ ){
                var answerDiag = document.querySelectorAll("."+diags[k]+".clicked")[m].innerHTML;
                diagData.push(answerDiag);
           
              }
              if(diagData.toString()==xRow.toString() || diagData.toString()==oRow.toString()){
                console.log("true");
                var winnerSymbol = diagData[0];
                $("h1").html(winnerSymbol+" Wins");
                }
        }
    }
    
    
}
