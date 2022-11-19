-- 1. найдите компетенции, которых нет ни у одного преподавателя

use university;

select 
t1.title
from competencies t1
left join teachers2competencies t2
on t1.id = t2.competencies_id
where t2.competencies_id is null;

-- 2. выведите название курса и имя старосты

select 
t1.title,
t2.name
from courses t1
left join teachers t2
on t1.headman_id = t2.id;

-- 3. выведите имя студента и имена старост, которые есть на курсах, которые он проходит

select 
t1.name,
t4.name
from students t1
left join students2courses t2
on t1.id = t2.student_id
left join courses t3
on t2.course_id = t3.id
left join teachers t4
on t3.teacher_id = t4.id;

-- 1) Найти департаменты в которых есть работники, зарабатывающие больше 10 000. В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)

use hr;

select 
t1.department_id,
      case
    	when t2.salary > 10000 then 1
      	else 0
      end
 from departments t1
 left join employees t2
 on t1.department_id = t2.department_id;


-- 2) Найти департаменты в которых ВСЕ работники зарабатывают больше 10 000. В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)

select distinct
t1.department_id,
      case
    	when t2.salary > 10000 then 1
      	else 0
      end
 from departments t1
 left join employees t2
 on t1.department_id = t2.department_id;