class Time():
    def __init__(self, a, b):
        self.a = a
        self.b = b
        self.single_numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 

    def validate_object(self):
        if self.a > 23:
            self.a = 0
        if self.b > 59:
            rermains = self.b % 60
            division_result = self.b / 60
            self.a += int(division_result)
            self.b = 0 + rermains

    def add_hour(self, hours):
        self.a += hours

    def add_minute(self, minutes):
        self.b += minutes

    def get_time(self):
        self.validate_object()
        if self.a in self.single_numbers:
            self.a_disp = f'0{self.a}'
        else: 
            self.a_disp = self.a
        if self.b in self.single_numbers:
            self.b_disp = f'0{self.b}'
        else:
            self.b_disp = self.b
        return f'{self.a_disp}:{self.b_disp}'

my_time = Time(9, 0)

print(my_time.get_time())
my_time.add_minute(43)
my_time.add_minute(20)
my_time.add_hour(14)
my_time.add_minute(57)
my_time.add_minute(5)
print(my_time.get_time())
