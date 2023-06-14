import wolframalpha
client=wolframalpha.Client('64TPRH-Y5JR5WRJ89')
while True:
    query=str(input("Query : "))
    res=client.query(query)
    output= next(res.results).text
    print(output)
