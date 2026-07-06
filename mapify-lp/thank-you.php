<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/_next/static/chunks/34d933785a17edf3.css">
  <link rel="stylesheet" href="assets/_next/static/chunks/7439acb00bfd45a9.css">
  <title>Thank You | Mapifyit</title>
  <meta name="robots" content="noindex, nofollow">
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      background: #03060D;
      color: #cbd5e1;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .page-wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.5rem;
      position: relative;
      overflow: hidden;
    }

    .glow {
      position: absolute;
      border-radius: 9999px;
      pointer-events: none;
      filter: blur(120px);
    }

    .glow-1 {
      top: 10%;
      left: 20%;
      width: 28rem;
      height: 28rem;
      background: rgba(37, 99, 235, 0.12);
    }

    .glow-2 {
      bottom: 10%;
      right: 15%;
      width: 24rem;
      height: 24rem;
      background: rgba(6, 182, 212, 0.08);
    }

    .card {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 42rem;
      text-align: center;
      padding: 3rem 2rem;
      border-radius: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(8, 14, 24, 0.85);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
    }

    .icon {
      width: 4.5rem;
      height: 4.5rem;
      margin: 0 auto 1.5rem;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(34, 197, 94, 0.12);
      border: 1px solid rgba(74, 222, 128, 0.25);
      color: #4ade80;
    }

    h1 {
      margin: 0 0 1rem;
      font-size: clamp(2rem, 5vw, 2.75rem);
      line-height: 1.15;
      color: #fff;
      font-weight: 700;
    }

    .subtitle {
      margin: 0 auto 2rem;
      max-width: 32rem;
      font-size: 1.05rem;
      line-height: 1.7;
      color: #94a3b8;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.875rem 1.75rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .btn-primary {
      background: #2563eb;
      color: #fff;
      box-shadow: 0 10px 30px rgba(37, 99, 235, 0.25);
    }

    .btn-primary:hover {
      background: #3b82f6;
    }

    .btn-outline {
      background: transparent;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }

    .btn-outline:hover {
      border-color: rgba(255, 255, 255, 0.45);
      background: rgba(255, 255, 255, 0.05);
    }

    .logo {
      display: block;
      margin: 0 auto 2rem;
      height: 2.5rem;
      width: auto;
    }
  </style>
</head>

<body>
  <div class="page-wrap">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    <div class="card">
      <a href="index.php"><img src="assets/mapify-logo-s.png" alt="Mapifyit" class="logo"></a>
      <div class="icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <h1>Thank You!</h1>
      <p class="subtitle">
        Your demo request has been received successfully. Our team will review your details and get back to you shortly.
      </p>
      <p class="subtitle" id="redirect-note" style="margin-bottom:1.5rem;font-size:0.95rem;">
        Redirecting to MapifyIt in <span id="redirect-countdown">10</span> seconds...
      </p>
      <div class="actions">
        <a href="index.php" class="btn btn-primary">Back to Home</a>
        <a href="tel:8889807422" class="btn btn-outline">Give Us a Call</a>
      </div>
    </div>
  </div>
  <script>
    (function () {
      var seconds = 5;
      var countdownEl = document.getElementById("redirect-countdown");
      var timer = setInterval(function () {
        seconds -= 1;
        if (countdownEl) countdownEl.textContent = String(seconds);
        if (seconds <= 0) {
          clearInterval(timer);
          window.location.href = "https://mapifyit.com/lp/";
        }
      }, 1000);
    })();
  </script>
</body>

</html>
