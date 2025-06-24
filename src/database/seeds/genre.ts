import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some sample genres
  const genres = [
    // add genres with description in portuguese
    {
      name: 'Rock',
      description:
        'Gênero musical caracterizado pelo uso de guitarras elétricas, bateria e vocais fortes.',
    },
    {
      name: 'Pop',
      description:
        'Gênero musical popular que abrange uma ampla gama de estilos, geralmente com melodias cativantes e letras acessíveis.',
    },
    {
      name: 'Hip-Hop',
      description:
        'Gênero musical que combina rimas faladas (rap) com batidas eletrônicas, frequentemente abordando temas sociais e culturais.',
    },
    {
      name: 'Jazz',
      description:
        'Gênero musical que se originou no início do século 20, caracterizado pela improvisação, ritmos complexos e influências africanas e europeias.',
    },
    {
      name: 'Classical',
      description:
        'Gênero musical que abrange uma ampla gama de estilos e períodos, desde a música barroca até a música contemporânea, geralmente escrita para orquestras e conjuntos.',
    },
    {
      name: 'Electronic',
      description:
        'Gênero musical que utiliza tecnologia eletrônica para criar sons e ritmos, abrangendo subgêneros como techno, house e trance.',
    },
    {
      name: 'Reggae',
      description:
        'Gênero musical originado na Jamaica, caracterizado por seu ritmo distinto, uso de guitarra offbeat e letras frequentemente relacionadas a temas sociais e políticos.',
    },
    {
      name: 'Country',
      description:
        'Gênero musical que se originou nos Estados Unidos, caracterizado por suas raízes no folk americano, blues e música rural, com temas frequentemente relacionados à vida no campo.',
    },
    {
      name: 'Blues',
      description:
        'Gênero musical que se originou no sul dos Estados Unidos, caracterizado por suas estruturas de acordes simples, expressões emocionais e letras que frequentemente abordam temas de tristeza e superação.',
    },
    {
      name: 'Metal',
      description:
        'Gênero musical caracterizado por guitarras distorcidas, bateria pesada e vocais agressivos, abrangendo subgêneros como heavy metal, thrash metal e death metal.',
    },
    {
      name: 'Funk',
      description:
        'Gênero musical que combina elementos de soul, jazz e R&B, caracterizado por ritmos dançantes, linhas de baixo groovadas e seções de metais.',
    },
    {
      name: 'R&B',
      description:
        'Gênero musical que combina elementos de soul, funk e pop, caracterizado por vocais emotivos e produção sofisticada.',
    },
    {
      name: 'Indie',
      description:
        'Gênero musical que abrange uma ampla gama de estilos, geralmente associado a artistas independentes e produção DIY (faça você mesmo).',
    },
    {
      name: 'Latin',
      description:
        'Gênero musical que abrange uma ampla gama de estilos originados na América Latina, incluindo salsa, bachata, reggaeton e música tradicional.',
    },
    {
      name: 'K-Pop',
      description:
        'Gênero musical sul-coreano que combina elementos de pop, hip-hop e R&B, conhecido por suas coreografias elaboradas e visuais vibrantes.',
    },
    {
      name: 'Alternative',
      description:
        'Gênero musical que abrange uma ampla gama de estilos alternativos ao mainstream, frequentemente associado a bandas independentes e experimentais.',
    },
    {
      name: 'Gospel',
      description:
        'Gênero musical religioso que se originou nas comunidades afro-americanas, caracterizado por suas letras espirituais e vocais poderosos.',
    },
    {
      name: 'Folk',
      description:
        'Gênero musical que se baseia em tradições populares, geralmente com letras narrativas e instrumentação acústica.',
    },
    {
      name: 'Disco',
      description:
        'Gênero musical popular nos anos 70, caracterizado por ritmos dançantes, linhas de baixo groovadas e produção orquestral.',
    },
    {
      name: 'Ska',
      description:
        'Gênero musical originado na Jamaica, caracterizado por seu ritmo acelerado, uso de metais e influências do jazz e do reggae.',
    },
    {
      name: 'Punk',
      description:
        'Gênero musical caracterizado por sua atitude rebelde, guitarras distorcidas e letras diretas, frequentemente associado a movimentos sociais.',
    },
    {
      name: 'Soul',
      description:
        'Gênero musical que combina elementos de gospel, R&B e blues, caracterizado por vocais emotivos e produção rica.',
    },
    {
      name: 'New Age',
      description:
        'Gênero musical instrumental que busca criar uma atmosfera relaxante e meditativa, frequentemente associado a práticas espirituais.',
    },
    {
      name: 'World Music',
      description:
        'Gênero musical que abrange uma ampla gama de estilos musicais de diferentes culturas ao redor do mundo.',
    },
    {
      name: 'Opera',
      description:
        'Gênero musical teatral que combina música, canto e drama, geralmente com enredos trágicos ou românticos.',
    },
    {
      name: 'Soundtrack',
      description:
        'Música composta para acompanhar filmes, séries de TV ou jogos, muitas vezes evocando emoções específicas.',
    },
    // add more genres as needed dont forget Sertanejo and variations
    {
      name: 'Sertanejo',
      description:
        'Gênero musical brasileiro que se originou no interior do Brasil, caracterizado por suas letras sobre a vida rural, amor e relacionamentos, com influências de música folk e country.',
    },
    {
      name: 'Sertanejo Universitário',
      description:
        'Subgênero do Sertanejo que se popularizou entre os jovens, incorporando elementos de pop e rock, com letras que falam sobre festas, relacionamentos e vida universitária.',
    },
    {
      name: 'Sertanejo Raiz',
      description:
        'Estilo tradicional do Sertanejo, que mantém as raízes folclóricas e acústicas do gênero, com letras que falam sobre a vida no campo, amor e saudade.',
    },
    {
      name: 'Sertanejo de Raiz',
      description:
        'Outra forma de se referir ao Sertanejo Raiz, enfatizando suas origens folclóricas e acústicas.',
    },
    {
      name: 'Sertanejo Pop',
      description:
        'Subgênero do Sertanejo que incorpora elementos de pop e música eletrônica, com letras que falam sobre temas contemporâneos e urbanos.',
    },
  ];

  for (const genre of genres) {
    await prisma.genre.create({
      data: genre,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
