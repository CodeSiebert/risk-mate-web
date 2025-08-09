import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: ["jira-issue-in-scope"],
  rules: {
    "jira-issue-in-scope": [RuleConfigSeverity.Error, "always"],
  },
};

export default configuration;
