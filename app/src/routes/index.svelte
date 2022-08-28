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
</script>
<a href="/article/v1">article/v1</a>
<br />
<a href="/article/v2">article/v2</a>
<br />
---
<br />
<a href="/banner/v1">banner/v1</a>
<br />
---
<br />
<a href="/blog/v1">blog/v1</a>
<br />
---
<br />
<a href="/contact/v1">contact/v1</a>
<br />
---
<br />
<a href="/footer/v1">footer/v1</a>
<br />
---
<br />
<a href="/form/v1">form/v1</a>
<br />
<a href="/form/v2">form/v2</a>
<br />
<a href="/form/v2">form/v2</a>
<br />
---
<br />
<a href="/header/v1">header/v1</a>
<br />
<a href="/header/v2">header/v2</a>
<br />
<a href="/header/v3">header/v3</a>
<br />
---
<br />
<a href="/main/v1">main/v1</a>
<br />
---
<br />
<a href="/modal/v1">modal/v1</a>
<br />
<a href="/modal/v2">modal/v2</a>
<br />
---
<br />
<a href="/marketing/v1">marketing/v1</a>
<br />
<a href="/marketing/v2">marketing/v2</a>
<br />
<a href="/marketing/v3">marketing/v3</a>
<br />
<a href="/marketing/v4">marketing/v4</a>
<br />
<a href="/marketing/v5">marketing/v5</a>
<br />
---
<br />
<a href="/swiper/v1">swiper/v1</a>
<br />
<a href="/swiper/v2">swiper/v2</a>
<br />
