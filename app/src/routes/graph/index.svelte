<script>
    import { request, gql } from 'graphql-request'

    const query = gql`
      query ProductsWhere {
      product_where(key: 1234) {
        id
        key
        text: value
        property {
          value
        }
        parentable {
          ... on Category {
            value
          }

        }
      }
    }
`

    request('http://127.0.0.1:8001/graphql', query).then((data) => console.log(data))




    fetch('http://127.0.0.1:8001/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query ProductsWhere {
                  product_where(key: 1234) {
                    id
                    key
                    text: value
                    property {
                      value
                    }
                    parentable {
                      ... on Category {
                        value
                      }
                }
              }
            }
      `,
            variables: {},
        }),
    })
        .then((res) => res.json())
        .then((result) => console.log(result));







    const testQuery = `
                query ProductsWhere {
                  product_where(key: 1234) {
                    id
                    key
                    text: value
                    property {
                      value
                    }
                    parentable {
                      ... on Category {
                        value
                      }
                }
              }
            }
      `

    async function getTest() {
        let results = await fetch('http://127.0.0.1:8001/graphql', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: testQuery
            })
        })
        let res = await results.json();
        console.log(res.data)
    }
    getTest()

</script>
