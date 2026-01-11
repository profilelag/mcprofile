import { expect, test } from "bun:test"
import MCProfile from "./index.js";

test("getPlayerByUsername - Java", async () => {
    const profile = await MCProfile.java.getPlayerByUsername("Notch");
    expect(profile.username).toBe("Notch");
    expect(profile.uuid).toBe("069a79f4-44e9-4726-a5be-fca90e38aaf5");
});

test("getPlayerByUUID - Java", async () => {
    const profile = await MCProfile.java.getPlayerByUUID("069a79f4-44e9-4726-a5be-fca90e38aaf5");
    expect(profile.username).toBe("Notch");
    expect(profile.uuid).toBe("069a79f4-44e9-4726-a5be-fca90e38aaf5");
});

test("getPlayerByGamertag - Bedrock", async () => {
    const profile = await MCProfile.bedrock.getPlayerByUsername("Notch");
    expect(profile.gamertag).toBe("Notch");
    expect(profile.xuid).toBe("2535453759792258");
});

test("getPlayerByXUID - Bedrock", async () => {
    const profile = await MCProfile.bedrock.getPlayerByXUID("2535453759792258");
    expect(profile.gamertag).toBe("Notch");
    expect(profile.xuid).toBe("2535453759792258");
});

test("getPlayerByFUID - Bedrock", async () => {
    const profile = await MCProfile.bedrock.getPlayerByFUID("00000000-0000-0000-0009-01fb54b26482");
    expect(profile.floodgateuid).toBe("00000000-0000-0000-0009-01fb54b26482");
    expect(profile.gamertag).toBe("Notch");
});