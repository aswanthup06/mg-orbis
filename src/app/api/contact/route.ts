import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
    } = body;

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: 'All fields are required.',
        },
        {
          status: 400,
        }
      );
    }

    // Basic email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: 'Please enter a valid email address.',
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } =
      await resend.emails.send({
        from: 'Website Contact <onboarding@resend.dev>',

        to: ['sourcing@mgorbis.com'],

        replyTo: email,

        subject: `New message from ${name}`,

        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>New Contact Message</title>
            </head>

            <body
              style="
                margin: 0;
                padding: 40px 20px;
                background: #f4f4f5;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <div
                style="
                  max-width: 600px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 16px;
                  padding: 32px;
                  border: 1px solid #e4e4e7;
                "
              >
                <h1
                  style="
                    margin: 0 0 24px;
                    font-size: 24px;
                    color: #18181b;
                  "
                >
                  Enquiry  
                </h1>

                <div
                  style="
                    margin-bottom: 20px;
                    padding: 16px;
                    background: #f4f4f5;
                    border-radius: 12px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      color: #71717a;
                      font-size: 13px;
                    "
                  >
                    Name
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #18181b;
                      font-size: 15px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(name)}
                  </p>
                </div>

                <div
                  style="
                    margin-bottom: 20px;
                    padding: 16px;
                    background: #f4f4f5;
                    border-radius: 12px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      color: #71717a;
                      font-size: 13px;
                    "
                  >
                    Email
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #18181b;
                      font-size: 15px;
                    "
                  >
                    ${escapeHtml(email)}
                  </p>
                </div>

                <div
                  style="
                    padding: 16px;
                    background: #f4f4f5;
                    border-radius: 12px;
                  "
                >
                  <p
                    style="
                      margin: 0 0 8px;
                      color: #71717a;
                      font-size: 13px;
                    "
                  >
                    Message
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #18181b;
                      font-size: 15px;
                      line-height: 1.6;
                      white-space: pre-wrap;
                    "
                  >
                    ${escapeHtml(message)}
                  </p>
                </div>

                <p
                  style="
                    margin: 28px 0 0;
                    color: #a1a1aa;
                    font-size: 12px;
                  "
                >
                  Sent from the website contact form.
                </p>
              </div>
            </body>
          </html>
        `,
      });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        {
          error: 'Failed to send message.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      'Contact API error:',
      error
    );

    return NextResponse.json(
      {
        error:
          'Something went wrong. Please try again.',
      },
      {
        status: 500,
      }
    );
  }
}

// Prevent HTML injection in email
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}