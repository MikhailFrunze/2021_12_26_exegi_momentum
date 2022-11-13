-- 1) Найти средний amount у каждого покупателя;

SELECT avg(amount) as avg_amount,
	t1.first_name,
    	t1.last_name
from customers t1
inner join orders t2
on t1.customer_id = t2.customer_id
group by t1.customer_id;

-- 2) Найти страны, в которых средний возраст покупателей больше или равен 25;

create view l as
select
avg(age) as avg_age,
country
from customers
group by country;



select
	country
from l
where avg_age >= 25; 

-- 3) Найти тех покупателей, у которых средний amount больше или равен 400;

create view average_amount as
select 
avg(amount) as avg_amount,
customer_id
from orders
group by customer_id;

select
t1.first_name,
t1.last_name
from customers t1
inner join average_amount t2
on t1.customer_id = t2.customer_id
where avg_amount >= 400;
