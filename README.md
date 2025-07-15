# mesa

## model

```
proposta
	id, name, requester, requester_email, requester_phone, requester_phone_is_whatsapp, preamble, scope, date_expiration, date_sent, date_accepted, date_rejected, portfolio_should_present_minibio, portfolio_should_present_related_projects, portfolio_presentation_items, 

scope //pensar se não tem como fazer um array, para não ter essa entidade a mais. um array para escolher os blocos talvez
	id, items <scope_blocks>

scope_blocks
	block_service
		id, service_relationship (blocks com serviços específicos pré preenchidos)
	block_product
		id, product_relationship (blocks com produtos específicos pré preenchidos), quantity

service // daí essa entidade não faz mais sentido.
	id, name, description, time_estimate, time_hour_value, value, value_currency, agreements, milestones (um serviço como criar um site, tem uma série de milestones, com diferentes momentos desembolsos)
product // produtos digitais variados, como o exposicao.app
	id, name, descr+iption, quantity, value, value_currency, value_unit
	block_product


rider
	id, name, items <rider_blocks>
rider_blocks
	block_hardware
		id, hardware_relationship, quantity
	block_software
		id, software_relationship, quantity
	block_bundle
		id, bundle_relationship, quantity

bundle
	id, name, items <rider_blocks>
hardware
	id, name, description, vendor_name, vendor_model, hardware_specs (spec_name, spec_info), quantity, unit, value, value_currency
software
	id, name, description, fabricator_name, version, quantity, value, value_currency, value_type (license|subscription) value_subscription_period (monthly|yearly)
people
	id, name, email, phone, phone_is_whatsapp, role, client, client_role

client
	id, name, email, people, projects (refs)
	project
		id, name, description, client, date_start, date_end, status (active|on_hold|completed|canceled)
		--- blocks de report? são os são enviados por email e organizados na pagina pontuado. dai ficaria um único doc, com esses elementos e uma ref para a proposta e ficaria seamless. ou ainda o projeto só agrega as refs. não me parece muito prático.
		milestone
			id, name, description, date_start, date_end, date_completion, status (active|on_hold|completed|canceled), billable
			deliverable
				id, name, description, date, content (blocks)
			deliverable_content_blocks
				block_visual_language--typography
				block_visual_language--colors
				block_visual_language--concept
				block_visual_language--symbol
				block_visual_language--social_media
				block_visual_language--digital_presentation
				block_website--wireframe
				block_website--figma
				block_website--prototype
				block_website--documentation
				block_interactive--wireframe
				block_interactive--figma
				block_interactive--prototype
				block_interactive--documentation
				block_techincal_project--consultancy
				block_techincal_project--achitecture
				block_techincal_project--documentation
				block_techincal_project--software_specifications
				block_techincal_project--hardware_specifications
```

```
- componente para substituir a tela base com um dashboard
	- validar se isso é possível. várias coisas se resolvem com isso
- componente para compor com a navegação
- modelar o máximo possível com blocks para ter um entry no banco por projeto e com isso fazer a arquitetura mais document based
- avaliar se os deliverables, precisam ser documentos que o projeto indexa ou não. 
- precisa ter um milestone que seja a reunião da semana? se sim, chama milestone? talvez seja melhor chamar report, ou ainda um agregador dos emails pro cliente, afinal a infra são emails. que podem ser redisparados se for o caso, do cliente perder.
- dai então precisaria ter os blocks dos reports. no fundo seria blocks dentro de blocks. um documento hierarquico, idealmente com templates, meio preenchidos, para terem algum override se necessário, como por exemplo no caso de cláusulas.
- é importante que seja possível ter um componente de preview dos emails e que seja possível gerar tb o pdf, assim o pdf consolidado como foi feito na época do envio, continua lá guardado e associado a proposta, mas a proposta em si é revalidada. isso pode ser uma solução para os preços.

Templates email:
1 - proposta
	- rider opcional
2 - on boarding, trabalhando pela primeira vez
3 - on boarding, já trabalhamos juntos antes
4 - report
	- apresenta em um conjunto de possíveis blocks para apresentar e dar visibilidade à diversos tipos de informação.
	- pode ter uma versão text com links para envio pelo whatsapp, redundante
5 - notificação
	- notificar o cliente do atraso dele
	- notificar de falta de pagamento
6 - deliverables/milestone
	- diversos tipos de deliverable
		- o email vai servir como preambulo, apresentação da coisa e link pra baixar.
		- ver se faz sentido automatizar o drive pra isso, pondo as pessoas com autorização pra entrar etc
	- os emails funcionam como a mesa deve funcionar, só que chegando sem esforço algum, como um delivery. não precisa de login, nem de acessar nada, mastigado. ou seja, no fundo, a mesa precisa ser o "ecommerce" e a mesa webapp a loja de roupa presencial, experiência de marca, somando site institucional com área do cliente.
7 - encerramento
	- deliverable do mesmo jeito, mas que pressionou o final, precisa ser uma especilização do deliverable, milestone.
8 - cobrança
	- email com nota fiscal eletrônica emitida e junto o resumo e um qrcode para pix copia e cola

- os textos default para ter os templates pré preenchidos, poderiam ser guardados em uma collection de fragmentos de texto, formato rich text, que pudessem ser pegos por function call, ou entidades de referencias, elas sim, preenchidas e editáveis e referenciadas atualizando geral.
- dai precisaria ter as clauses ou service precisaria ter que ter condições próprias para serem combináveis, dai chego no ponto Paula
```
