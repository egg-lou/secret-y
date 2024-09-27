export default function Hero() {
  const scrollToMemories = () => {
    const element = document.getElementById('memories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello Yca 👋</h1>
          <p class="py-6">
            This is just a simple website for me to express my gratitude to you.
            You are the most amazing person that I met this year and no one can
            replace you. I hope you like this simple website that I made for
            you. I love you so much ❤️
          </p>
          <button class="btn btn-primary" onClick={scrollToMemories}>
            View Some of Our Memories Together
          </button>
        </div>
      </div>
    </div>
  );
}
