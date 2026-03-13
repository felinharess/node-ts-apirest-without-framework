# Podcast Manager

### Desc:
App ao estilo netflix, onde diferentes episódios de podcasts serão separados por categorias;

### Domain:
Podcasts; 

### Features:
- Listar os episódios de podcasts em sessões de categorias:
  - [saude, bodybuilder, mentalidade, humor, cinema];
- Filtrar epsódios por nome de podcast;

## How to:
### Feature 
Listar os episódios podcasts em sessões de categorias:

### How to implement
Vou retornar em uma api rest(json) o nome do podcast, nome do episódio, imagem de capa, link, categorias;
```js 
    {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
        link: "https://www.youtube.com/live/pQSuQmUfS30?si=P-H8b2UEOmNsnA3k",
        categories: ["saúde", "bodybuilder"]
    },
    {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q",
        link: "https://www.youtube.com/live/pQSuQmUfS30?si=P-H8b2UEOmNsnA3k",
        categories: ["saúde", "bodybuilder"]
    },
```

### Feature
Listar episódios de um mesmo podcast