import React from "react";
import Videocomp from "../components/videocomp";
export default function Videos() {
  return (
    <div className="flex flex-col justify-center bg-homebackground xl:gap-y-5 xl:p-14">
      <div className="m-2 rounded-full bg-black text-center text-2xl font-bold text-white xl:m-4 xl:p-5 xl:text-4xl">
        Videos
      </div>

      <Videocomp
        title="ADHD"
        desc="ADHD is one of the most common neurodevelopmental disorders of
        childhood. It is usually first diagnosed in childhood and often
        lasts into adulthood. Children with ADHD may have trouble paying
        attention, controlling impulsive behaviors (may act without thinking
        about what the result will be), or be overly active."
        vidurl={require("../assets/videos/adhd.mp4")}
        isAdult={false}
      />
      <Videocomp
        title="Depression"
        desc="Bipolar disorder (formerly called manic-depressive illness or manic depression)
         is a mental illness that causes unusual shifts in a person’s mood, energy, activity levels, and concentration. These shifts can make it difficult to carry out day-to-day tasks.There are three types of bipolar disorder. All three types involve clear changes in mood, energy, and activity levels. These moods range from periods of extremely “up,” elated, irritable, or energized behavior (known as manic episodes) to very “down,” sad, indifferent, or hopeless periods (known as depressive episodes). Less severe manic periods are known as hypomanic episodes."
        vidurl={require("../assets/videos/depression.mp4")}
        isAdult={false}
      />
      <Videocomp
        title="PTSD"
        desc="Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.

        It is natural to feel afraid during and after a traumatic situation. Fear is a part of the body’s “fight-or-flight” response, which helps us avoid or respond to potential danger. People may experience a range of reactions after trauma, and most people recover from initial symptoms over time. Those who continue to experience problems may be diagnosed with PTSD."
        vidurl={require("../assets/videos/ptsd.mp4")}
        isAdult={true}
      />
      <Videocomp
        title="Meditation"
        desc="Meditation is a practice that involves focusing or clearing your mind using a combination of mental and physical techniques.

        Depending on the type of meditation you choose, you can meditate to relax, reduce anxiety and stress, and more. Some people even use meditation to help them improve their health, such as using it to help adapt to the challenges of quitting tobacco products."
        vidurl={require("../assets/videos/meditation.mp4")}
        isAdult={false}
      />

      <Videocomp
        title="STDs"
        desc="Sexually transmitted diseases (STDs) are caused by sexually transmitted infections (STIs). They are spread mainly by sexual contact. STIs are caused by bacteria, viruses or parasites. A sexually transmitted infection may pass from person to person in blood, semen, or vaginal and other bodily fluids.Sometimes sexually transmitted infections are spread in ways other than sexual contact. For example, STIs can spread to infants during pregnancy or childbirth. STIs also can spread through blood transfusions or shared needles."
        vidurl={require("../assets/videos/stds.mp4")}
        isAdult={true}
      />
    </div>
  );
}
