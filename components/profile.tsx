const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full space-y-4"
    >
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        Bio
      </h1>
      <div className="text-gray-600 space-y-2">
        <p>
          Hey! I&apos;m Howard, a research software engineer at the Center for
          High Throughput Computing (CHTC), working on <i>Pelican</i>, an
          open-source platform distributing PB-scale data.
        </p>
        <p>
          I hold an M.S. in Computer Science from UW-Madison and has 2+ years of
          experience building robust software systems — from enterprise
          microservices built on Java Spring Boot to open-source distributed
          systems.
        </p>
      </div>
      <h1 className="font-bold text-2xl md:text-2xl tracking-tight mb-0 text-black mt-6">
        What I&apos;m Proud of
      </h1>
      <div className="text-gray-600 space-y-2">
        <p>
          Working on a global distributed system is exactly like teaching
          kindergarten.
        </p>
        <p>
          You have kids (servers) with diverse backgrounds (hardware) and very
          particular parents (admins). My job is to be the calm teacher in the
          center of the chaos (ups and downs in the monitoring dashboard). I
          handle the occasional tantrum (a critical bug), investigate the
          mystery of the missing crayon (debug the root cause), and gently put
          the one kid hogging the spotlight (a noisy service) into
          self-amusement so the rest of the class can function.
        </p>
        <p>
          It&apos;s wonderfully chaotic, but seeing them all work together is
          the ultimate reward.
        </p>
      </div>
    </div>
  );
};

export default Profile;
