import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Opportunity Exploration" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">Goal:</strong> Identify unique opportunities through deep problem-solving and creativity. <br /> <br />
          <strong className="font-bold text-neutral-950">Key Activities: </strong> <br />
          <strong className="font-semibold text-neutral-950">Trendspotting: </strong> Analyzing global and local trends to uncover untapped markets. <br />
          <strong className="font-semibold text-neutral-950">Problem Mapping: </strong> Identifying pressing issues in industries or communities. <br />
          <strong className="font-semibold text-neutral-950">Creative Sprint: </strong> Brainstorming bold, unconventional ideas with team mentors. <br />
          <strong className="font-semibold text-neutral-950">Output: </strong> A problem statement and a well-defined business opportunity.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Analyzation Tools</TagListItem>
        <TagListItem>Case Study Examinations</TagListItem>
        <TagListItem>Market Dissections</TagListItem>
        <TagListItem>Outreach Programs</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Blueprint Development " image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">Goal:</strong> Build a strategic framework for a scalable solution. <br /> <br />
          <strong className="font-bold text-neutral-950">Key Activities: </strong> <br />
          <strong className="font-semibold text-neutral-950">Business Architecture: </strong> Designing operational, marketing, and financial frameworks. <br />
          <strong className="font-semibold text-neutral-950">Customer Personas: </strong> Creating detailed profiles of target customers. <br />
          <strong className="font-semibold text-neutral-950">Solution Sketching: </strong> Outlining a mock-up or storyboard of the product or service. <br />
          <strong className="font-semibold text-neutral-950">Output: </strong>A strategic business blueprint, including customer insights and operational models.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Windermere Preparatory School', role: 'Orlando' }}
        className="mt-12"
      >
        BizBuild helped ours students design a framework that was realistic, but challenging! It greatly helped students develope real world skills.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Impact Prototyping" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">Goal:</strong> Create an impactful prototype or demo and gather feedback. <br /> <br />
          <strong className="font-bold text-neutral-950">Key Activities: </strong> <br />
          <strong className="font-semibold text-neutral-950">Prototype Design Lab: </strong> Hands-on workshops to create a tangible product. <br />
          <strong className="font-semibold text-neutral-950">User Trials: </strong> Testing the prototype with early adopters and gathering insights. <br />
          <strong className="font-semibold text-neutral-950">Feedback Integration: </strong> Incorporating user feedback to improve the prototype. <br />
          <strong className="font-semibold text-neutral-950">Output: </strong>A functional prototype or service demo ready for refinement.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Product Design">
          We support students throughout the entire product creation phase with a wide range of resources from software to hardware.
        </ListItem>
        <ListItem title="User Tests">
          Students have access to &apos;test subjects&apos; to recieve feedback on their products.
        </ListItem>
      </List>
    </Section>
  )
}

function GrowthEngineering() {
  return (
    <Section title="Growth Engineering" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">Goal:</strong> Develop systems and strategies for business sustainability and growth.
          Key Activities <br /> <br />
          <strong className="font-bold text-neutral-950">Key Activities: </strong> <br />
          <strong className="font-semibold text-neutral-950">Revenue Modeling: </strong> Designing monetization strategies and pricing structures. <br />
          <strong className="font-semibold text-neutral-950">Scalability Testing: </strong> Assessing how the business model performs under increased demand. <br />
          <strong className="font-semibold text-neutral-950">Brand Storytelling: </strong> Crafting a compelling narrative for customers and stakeholders. <br />
          <strong className="font-semibold text-neutral-950">Output: </strong>A business strategy ready to attract customers and scale operations.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Revenue Modals</TagListItem>
        <TagListItem>Scaling tools</TagListItem>
        <TagListItem>Marketing Traning</TagListItem>
        <TagListItem>Buisness plan templates</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
      </TagList>
    </Section>
  )
}

function Vision() {
  return (
    <Section title="Vision Pitching and Launch" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">Goal:</strong> Present a polished business venture and secure support for future growth.
          Key Activities <br /> <br />
          <strong className="font-bold text-neutral-950">Key Activities: </strong> <br />
          <strong className="font-semibold text-neutral-950">Pitch Crafting: </strong> Developing a dynamic presentation with storytelling, visuals, and financials. <br />
          <strong className="font-semibold text-neutral-950">Live Showcase: </strong> Presenting the venture to judges, investors, and the BizBuild community. <br />
          <strong className="font-semibold text-neutral-950">Post-Launch Roadmap: </strong> Setting goals for future development and partnerships. <br />
          <strong className="font-semibold text-neutral-950">Output: </strong>A fully refined business venture with actionable next steps for success.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
        <Blockquote
          author={{ name: 'Grant Garcia', role: 'Student' }}
          className="mt-12"
        >
          With Bizbuild&apos;s help, I was able to create a fully operational online buisness that is bringing in passive income!
        </Blockquote>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-[#00cc99]">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-[#2acd9f] stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Why Us?"
        title="What Makes BizLab Unique"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while providing students with opportunities and connections with real world industry leaders
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Hyper-Focused Mentorship">
            Participants receive tailored guidance from industry leaders and business experts at every stage.
          </GridListItem>
          <GridListItem title="Real-World Challenges">
            Incorporates case studies and community challenges to connect solutions with real impact.
          </GridListItem>
          <GridListItem title="Interactive Learning">
            Workshops and labs emphasize doing, not just learning, ensuring participants gain practical skills.
          </GridListItem>
          <GridListItem title="Global Networking">
            Opportunities to collaborate with peers, mentors, and experts across Nord Anglia schools and beyond.
          </GridListItem>
          <GridListItem title="Recognition and Rewards">
            Top ventures are highlighted in the BizBuild community, with access to funding, partnerships, or further mentorship.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new technologies and markets.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Bizlab',
  description:
    'Our Entrepreneurship Accelerator, made to empower aspiring entrepreneurs through a structured, hands-on program that fosters innovation, builds practical skills, and delivers real-world business experience.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="The Entrepreneurship Accelerator" title="Bizlab">
        <p>
          Our Entrepreneurship Accelerator, made to empower aspiring entrepreneurs through a structured, hands-on program that fosters innovation, builds practical skills, and delivers real-world business experience.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
        <GrowthEngineering />
        <Vision />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
