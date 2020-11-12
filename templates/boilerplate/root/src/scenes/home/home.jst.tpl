{{+ import Greeting from "<%=name%>/widgets/greeting/greeting"; }}
{{+ import Button from "<%=name%>/widgets/button/button"; }}

<h1>Empty "<%=name%>" project!</h1>

{{% Greeting, {}, greeting }}

<div class="row scenes">
	{{% Button, 'Player', playerButton }}
</div>
<div class="row history">
	{{% Button, 'Back in history', backButton }}
	{{% Button, 'Forward in history', forwardButton }}
</div>
