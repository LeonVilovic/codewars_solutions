WITH date_count AS (
  SELECT
  TO_DATE(a.year || '-' || a.month || '-01', 'YYYY-MM-DD') AS date
  ,COUNT(*) AS count 
  FROM
    (SELECT 
    created_at
    ,EXTRACT(MONTH FROM created_at) AS month 
    ,EXTRACT(YEAR FROM created_at) AS year 
    FROM posts ) AS a
    GROUP BY a.year, a.month
    ORDER BY a.year ASC, a.month ASC
    )
SELECT 
  date
  ,count
  ,TO_CHAR(
        ROUND(
  (count::numeric - LAG(count) OVER (ORDER BY date)) / NULLIF(LAG(count) OVER (ORDER BY date), 0) * 100
         , 1 ), 'FM999999990.0%' 
          ) AS percent_growth
FROM date_count