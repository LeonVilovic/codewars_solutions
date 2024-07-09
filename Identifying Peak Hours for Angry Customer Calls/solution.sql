SELECT 
    hour AS call_hour,
    COUNT(*) AS angry_call_count
FROM 
(SELECT 
  c.call_id AS id
  ,EXTRACT(HOUR FROM c.timestamp) AS hour 
FROM 
  transcriptions t JOIN calls c ON c.call_id = t.call_id 
WHERE t.content LIKE '%F-word%F-word%F-word%' AND c.status LIKE 'transferred_to_rep') AS a

GROUP BY 
hour
ORDER BY 
angry_call_count DESC,call_hour ASC;