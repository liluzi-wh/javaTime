


var time = +prompt('Введите время')

switch (time) {
    case 1:
        alert('Час ночи')
        break;
    case 2:
        alert('Два часа ночи')
        break;
    case 3:
        alert('Три часа ночи')
        break;
    case 4:
        alert('Четыре часа ночи')
        break;
    case 5:
        alert('Пять часов утра')
        break;
    case 6:
        alert('Шесть часов утра')
        break;
    case 7:
        alert('Семь часов утра')
        break;
    case 8:
        alert('Восемь часов утра')
        break;
    case 9:
        alert('Девять часов дня')
        break;
    case 11:
        alert('Одинадцать часов дня')
        break;
    case 12:
        alert('Двенадцать часов дня')
        break;
    case 13:
        alert('Час дня')
        break;
    case 14:
        alert('Два часа дня')
        break;
    case 15:
        alert('Три часа дня')
        break;
    case 16:
        alert('Четыре часа дня')
        break;
    case 17:
        alert('Пять часов дня')
        break;
    case 18:
        alert('Шесть часов дня')
        break;
    case 19:
        alert('Семь часов вечера')
        break;
    case 20:
        alert('Восемь часов вечера')
        break;
    case 21:
        alert('Девять часов ночи')
        break;
    case 22:
        alert('Десять часов ночи')
        break;
    case 23:
        alert('Одинадцать часов ночи')
        break;
    case 24:
        alert('Двенадцать часов ночи')
        break;
    
    default:
        break;
}
if (time > 24){
    alert('Ошибка')
}