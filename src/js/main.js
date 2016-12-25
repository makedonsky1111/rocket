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

        delet: function() { $('#scrin').val(''); },
        
        "caps-lock": function() { $('#scrin').toUpperCase; },
        
        enter: function() {  },
        
    };
    
  // 2.Функція  
$.fn.keyPresser = function() {
    this.on( "click", function() {  
    pressedKey = $(this).data('value');
    $('#scrin').append(keysObj[pressedKey]);
    return this;
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