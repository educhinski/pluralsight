<%
Response.ContentType = "text/event-stream"
Response.expires = -1
Response.Write("data: The server time is: " & now())
Response.Flush()
%>