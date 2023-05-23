import { TextInput, Button, Group, Box, NumberInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

import "../styles/Form.css";

function Demo() {
  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      birthdate: "",
      startdate: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      department: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      zip: (value) => (value < 0 ? "You did not live on mars" : null),
    },
  });

  return (
    <Box maw="100%" mx="auto" className="hrnet-form-container">
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        style={{ display: "flex" }}
      >
        <div>
          <TextInput
            withAsterisk
            label="First Name"
            placeholder="Gerard"
            {...form.getInputProps("firstname")}
          />

          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="Martin"
            {...form.getInputProps("lastname")}
          />

          {/* DatePicker Plugin */}
          <DateInput
            allowDeselect
            label="Birth Date"
            placeholder="Date input"
            maw={400}
            mx="auto"
            {...form.getInputProps("birthdate")}
          />

          {/* DatePicker Plugin */}
          <DateInput
            allowDeselect
            label="Start Date"
            placeholder="Date input"
            maw={400}
            mx="auto"
            {...form.getInputProps("startdate")}
          />
        </div>

        {/* Section Adresse */}
        <div
          className="hrnet-form-adress"
          style={{
            backgroundColor: "#f9bc60",
            padding: "1em",
            margin: "0.5em auto",
            borderRadius: "10px",
            color: "#fffffe",
          }}
        >
          <TextInput
            withAsterisk
            label="Street"
            placeholder="1234 Main St"
            {...form.getInputProps("street")}
            style={{ color: "#fffffe" }}
          />

          <TextInput
            withAsterisk
            label="City"
            placeholder="City"
            {...form.getInputProps("city")}
          />

          {/* DropDown Selector Pluggin */}
          <TextInput
            withAsterisk
            label="State"
            placeholder="State"
            {...form.getInputProps("state")}
          />

          {/* Number selector */}
          <NumberInput
            mt="sm"
            label="Zip Code"
            placeholder="0"
            min={0}
            max={9999}
            {...form.getInputProps("zip")}
          />

          {/* DropDown Selector Pluggin */}
          <TextInput
            withAsterisk
            label="Department"
            placeholder="Department"
            {...form.getInputProps("department")}
          />
        </div>

        <Group position="right" mt="md" className="hrnet-form-button">
          <Button
            type="submit"
            style={{ backgroundColor: "#e16162", borderRadius: "5px" }}
          >
            Save
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default Demo;
