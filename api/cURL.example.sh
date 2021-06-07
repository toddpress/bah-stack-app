curl -i -X POST "http://localhost:8080/api/tutorials/" \
-H "accept: */*" \
-H "Content-Type: application/json" -d "{\"title\":\"How to test a REST api from command line with curl – CodepediaOrg\",\"description\":\"Fo bar baz\",\"published\":\"false\"}"