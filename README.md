# Time Class
Этот проект предоставляет простую реализацию класса Time на языках программирования JavaScript и Python. Класс Time позволяет представлять и манипулировать временем в часах и минутах.
Основные возможности
## Python
Создание экземпляра:
`
my_time = Time(9, 0)
`
<br>
Добавление часов и минут:
`
my_time.add_hour(3)
my_time.add_minute(45)
`
<br>
Получение отформатированного времени:
`
print(my_time.get_time()) // Вывод: 12:45
`
<br>
## JS
Создание экземпляра:
`
const myTime = new Time(9, 0, singleNumbers);
`
<br>
Добавление часов и минут:
`
myTime.addHour(2);
myTime.addMinute(30);
`
<br>
Получение отформатированного времени:
`
console.log(myTime.getTime()); // Вывод: 11:30
`
