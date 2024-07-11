WITH actor_pairs AS (
    SELECT
        fa1.actor_id AS actor1_id,
        fa2.actor_id AS actor2_id,
        fa1.film_id
    FROM
        film_actor fa1
    JOIN
        film_actor fa2 ON fa1.film_id = fa2.film_id
    WHERE
        fa1.actor_id < fa2.actor_id
)
SELECT 
  (SELECT CONCAT(a.first_name,' ',a.last_name) FROM actor a WHERE a.actor_id = s.actor1id ) AS first_actor,
  (SELECT CONCAT(a.first_name,' ',a.last_name) FROM actor a WHERE a.actor_id = s.actor2id ) AS second_actor,
  (SELECT title FROM film f WHERE f.film_id = ap.film_id ) AS title
FROM
  (SELECT 
      a1.actor_id AS actor1id, 
      a2.actor_id AS actor2id,
      COUNT(actor_pairs.film_id) AS films_together
  FROM 
  actor_pairs
  JOIN
      actor a1 ON actor_pairs.actor1_id = a1.actor_id   
  JOIN
      actor a2 ON actor_pairs.actor2_id = a2.actor_id
  GROUP BY a1.actor_id, a2.actor_id
  ORDER BY films_together DESC
  LIMIT 1) AS s
JOIN actor_pairs ap ON (s.actor1id = ap.actor1_id AND s.actor2id = ap.actor2_id)