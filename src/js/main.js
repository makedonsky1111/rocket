$(document).ready(function() {  

// для всіх кнопок задіяти плагін
// в кожної кнопки в атрибуті data-value
// має бути її код (код кнопки )
// і тоді за цим кодом із об’єкта (який також потрібно створити) дістаєш значення
// +в плагін як параметр передаєш ф-ю колбек
// в яку власне це значення і буде повертатися  
    
 //1. Обєкт з значеннями
    var pressedKey;
    var keysObj = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "zero": "0",
        "-": "-",
        "=": "=",
        "q": "q",
        "w": "w",
        "e": "e",
        "r": "r",
        "t": "t",
        "y": "y",
        "u": "u",
        "i": "i",
        "o": "o",
        "p": "p",
        "[": "[",
        "]": "]",
        "a": "a",
        "s": "s",
        "d": "d",
        "f": "f",
        "g": "g",
        "h": "h",
        "j": "j",
        "k": "k",
        "l": "l",
        ";": ";",
        "'": "'",
        "z": "z",
        "x": "x",
        "c": "c",
        "v": "v",
        "b": "b",
        "n": "n",
        "m": "m",
        ",": ",",
        ".": ".",
        "/": "/",
        "space": " ",
        "tr": "`",
        "td": "~",
        "!": "!",
        "@": "@",
        "#": "#",
        "$": "$",
        "%": "%",
        "^": "^",
        "&": "&",
        "*": "*",
        "(": "(",
        ")": ")",
        "_": "_",
        "+": "+",
        "Q": "Q",
        "W": "W",
        "E": "E",
        "R": "R",
        "T": "T",
        "Y": "Y",
        "U": "U",
        "I": "I",
        "O": "O",
        "P": "P",
        "A": "A",
        "S": "S",
        "D": "D",
        "F": "F",
        "G": "G",
        "H": "H",
        "J": "J",
        "K": "K",
        "L": "L",
        "Z": "Z",
        "X": "X",
        "C": "C",
        "V": "V",
        "B": "B",
        "N": "N",
        "M": "M",

        delet: function() { $('#scrin').val(''); },
        
        "caps-lock": function() { $('#scrin').toUpperCase; },
        
        enter: function() {  },
        
    };
    
  // 2.Функція  
$.fn.keyPresser = function() {
    
    $("#caps").on( "click", function() {
        $(this).toggleClass( "caps-on" ); //включає\виключає капс
    });
    
    
    this.on( "click", function() {    
        if(!$("#caps").hasClass("caps-on")){ //якщо класу нема то бере дані з обєкта по велью
        pressedKey = $(this).data('value');
        $('#scrin').append(keysObj[pressedKey]);
        return this;
        }
    });
    
    this.on( "click", function() {    
        if($("#caps").hasClass("caps-on")){  // якшо є то по велью1
        pressedKey = $(this).data('value1');
        $('#scrin').append(keysObj[pressedKey]);
        return this;
        }
    });
    
    
  
    
};
    
$("button").keyPresser();  
    
    
/*$.fn.keyPresser = function() {
    this.on( "click", function() {     
    $('#scrin').append($(this).data('value'));
    return this;
    });
  };

$("button").keyPresser();
*/   
  
    
    
    
    
    
});