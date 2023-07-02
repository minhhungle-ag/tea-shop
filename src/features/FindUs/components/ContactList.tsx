import { Box, Container, Stack, Typography } from '@mui/material'
import { PostCard } from 'components/Common/PostCard'

export interface Contact {
  title: string
  imageUrl: string
  shortDescription: string
}

export interface ContactListProps {
  onCardClick?: (item: Contact) => void
}

const contactList: Contact[] = [
  {
    title: 'Serenity Square',
    imageUrl:
      'https://assets.website-files.com/642039b8b6257e5cb2108bee/6422ca805479f860f94e4210_About%20Store%201.jpg',
    shortDescription: '(123) 456 - 7891, 1234 Ipsum Way Lorem City, ZZ 00000',
  },
  {
    title: 'Mystic Market',
    imageUrl:
      'https://assets.website-files.com/642039b8b6257e5cb2108bee/6422ca8279a047da533d73d3_About%20Store%202-p-500.jpg',
    shortDescription: '(123) 456 - 7891, 5678 Dolor Lane Ipsumville, ZZ 00001',
  },
  {
    title: 'Harmony Heights',
    imageUrl:
      'https://assets.website-files.com/642039b8b6257e5cb2108bee/6422ca840c32f37d623776e4_About%20Store%203-p-500.jpg',
    shortDescription:
      '(123) 456 - 7891, 9012 Consectetur Blvd. Ipsum Springs, ZZ 00002',
  },
  {
    title: 'Blissful Boulevard',
    imageUrl:
      'https://assets.website-files.com/642039b8b6257e5cb2108bee/6422ca863da2904830654f41_About%20Store%204-p-500.jpg',
    shortDescription:
      '(123) 456 - 7891, 3456 Adipiscing Rd. Lorem Heights, ZZ 0000',
  },
]

export function ContactList({ onCardClick }: ContactListProps) {
  return (
    <Box width="100%" sx={{ py: 15 }}>
      <Container>
        <Stack spacing={10}>
          <Box textAlign="center" maxWidth={650} sx={{ mx: 'auto' }}>
            <Typography
              variant="h5"
              fontWeight={400}
              color="primary"
              gutterBottom
            >
              Our Store
            </Typography>

            <Typography variant="h4" fontWeight={600} gutterBottom>
              Find a Store Near You
            </Typography>
          </Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            sx={{ mx: -1.5 }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {contactList.map((item, idx) => (
              <Box
                width={{ xs: '100%', sm: 1 / 2 }}
                key={idx}
                onClick={() => onCardClick?.(item)}
                sx={{ height: 'auto' }}
              >
                <Box sx={{ p: 1.5, height: '100%' }}>
                  <PostCard
                    title={item.title}
                    imageUrl={item.imageUrl}
                    shortDescription={item.shortDescription}
                  />
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
