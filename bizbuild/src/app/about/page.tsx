import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import Han from '@/images/team/Han.png'
import Helena from '@/images/team/Helena.png'
import Nick from '@/images/team/Nichole.png'
import Grant from '@/images/team/Grant.png'
import Guga from '@/images/team/Guga.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Pillars"
        title="The three pillars that everything we do is based off of. "
        invert
      >
        <p>
          Information, Inspiration and Implementation
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Information" invert>
            Providing students with essential business knowledge, covering key concepts in entrepreneurship, finance, marketing, and more. This pillar lays a strong foundation, ensuring students understand the basics of the business world.
          </GridListItem>
          <GridListItem title="Inspiration" invert>
            Through engaging content on social media and insights from guest speakers, BizBuild aims to inspire students by showcasing real-world success stories and diverse perspectives, motivating them to explore and pursue their business ambitions.
          </GridListItem>
          <GridListItem title="Implementation" invert>
            Emphasizing the importance of practical learning, encouraging students to apply their knowledge through interactive lessons and real-world activities. This pillar ensures that students gain hands-on experience, turning theoretical knowledge into practical skills.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Gustavo (Guga) Campos',
        role: 'Founder / CEO',
        image: { src: Guga },
      },
      {
        name: 'Grant Garcia',
        role: 'Cheif Operating Officer',
        image: { src: Grant },
      },
      {
        name: 'Helena Cortez',
        role: 'Cheif Financial Officer',
        image: { src: Helena },
      },
      {
        name: 'Shouqi Han',
        role: 'Cheif Technology Officer',
        image: { src: Han },
      },
      {
        name: 'Nicole FerreIra',
        role: 'Cheif Marketing Officer',
        image: { src: Nick },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our members at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          BizBuild is a youth-led nonprofit organization dedicated to empowering the next generation of entrepreneurs and business professionals. By combining education, creativity, and practical experience, BizBuild enables young minds and aspiring leaders to explore, innovate, and thrive in the world of business. With innovative programs and global outreach, it’s where ideas planted by youth grow into impactful action.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the team"
        intro="Our team of passionate innovators and mentors has one mission: empowering entrepreneurs and future business people to turn their ideas into reality and leave a lasting impact. From inspiring creative thinking to teaching business fundamentals, BizBuild is here to help you plant the seed of success and grow it into something extraordinary."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
