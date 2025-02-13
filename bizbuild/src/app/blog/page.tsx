import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'BizLeague Challenge Process',
  description:
    'Learn about the four-step process of BizLeague, an exclusive chapter-based business challenge for BizBuild chapters.',
}

export default function BizLeagueProcess() {
  return (
    <>
      <PageIntro eyebrow="BizLeague" title="An Exclusive Chapter-Based Business Challenge">
        <p>
          BizLeague challenges simulate real-world business scenarios and push chapters to innovate, collaborate, and excel. Explore our four-step process below.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-16">
          {/* Step 1 */}
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold text-neutral-950">1. Challenge Release</h2>
              <ul className="mt-4 space-y-2 text-neutral-600 list-disc ml-6">
                <li>
                  <strong>Release Time:</strong> Challenges are released at <strong>12:00 AM (midnight) EST</strong> on the <strong>1st of each month</strong>.
                </li>
                <li>
                  Each challenge outlines a unique, real-world business problem complete with objectives, deliverables, and constraints.
                </li>
                <li>
                  Teams have the entire month to strategize, collaborate, and craft their solutions.
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold text-neutral-950">2. Challenge Development</h2>
              <ul className="mt-4 space-y-2 text-neutral-600 list-disc ml-6">
                <li>
                  <strong>Teamwork:</strong> Chapters work together to analyze the challenge and develop actionable solutions.
                </li>
                <li>
                  Use research, creativity, and teamwork to address the objectives.
                </li>
                <li>
                  Prepare a polished submission that demonstrates both innovation and feasibility.
                </li>
                <li>
                  <strong>Submission Deadline:</strong> Entries must be submitted by <strong>8:00 PM EST</strong> the night before the <strong>1st of the following month</strong>.
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Step 3 */}
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold text-neutral-950">3. Judging Period</h2>
              <ul className="mt-4 space-y-2 text-neutral-600 list-disc ml-6">
                <li>
                  After submissions close, a panel of experienced judges evaluates entries based on:
                  <ul className="mt-2 space-y-1 list-disc ml-6">
                    <li>
                      <strong>Innovation:</strong> How creative and original is the solution?
                    </li>
                    <li>
                      <strong>Practicality:</strong> Can the solution realistically be implemented?
                    </li>
                    <li>
                      <strong>Impact:</strong> How effectively does the solution address the challenge and deliver value?
                    </li>
                  </ul>
                </li>
                <li>
                  Judges deliberate throughout the month to ensure fair and thorough evaluations.
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Step 4 */}
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold text-neutral-950">4. Results Announcement</h2>
              <ul className="mt-4 space-y-2 text-neutral-600 list-disc ml-6">
                <li>
                  Results and detailed feedback are released later that same month.
                </li>
                <li>
                  Scores are used to update the BizLeague Leaderboard, where chapters vie for top spots and recognition.
                </li>
              </ul>
            </section>
          </FadeIn>

          {/* Why Participate */}
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold text-neutral-950">Why Participate in BizLeague?</h2>
              <ul className="mt-4 space-y-2 text-neutral-600 list-disc ml-6">
                <li>
                  <strong>Exclusive Access:</strong> Open only to BizBuild chapters, ensuring a high-caliber, competitive environment.
                </li>
                <li>
                  <strong>Real-World Relevance:</strong> Challenges are inspired by current business trends and market dynamics.
                </li>
                <li>
                  <strong>Global Prestige:</strong> Compete with chapters from around the world and gain international recognition.
                </li>
                <li>
                  <strong>Skill Development:</strong> Enhance teamwork, strategic thinking, and leadership through hands-on experience.
                </li>
                <li>
                  <strong>Rewards and Recognition:</strong> Top-performing chapters earn exclusive mentorship opportunities, resources, and public acclaim.
                </li>
              </ul>
            </section>
          </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
