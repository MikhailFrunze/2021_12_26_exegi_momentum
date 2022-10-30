-- ДЗ:
-- 11) Поменяйте у Олега Петрова фамилию на Сидоров

set sql_safe_updates = 0;

update students
set lastname = 'Сидоров'
where
lastname like 'Петров';

select
	*
from students;

-- 12) Для всех учеников, у которых оценка не больше 31 увеличить ее на 10

update students
set avg_mark = avg_mark * 10
where avg_mark < 31;

select
	*
from students;