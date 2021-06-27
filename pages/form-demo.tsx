import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Form, Formik, Field, useField, ErrorMessage } from 'formik'
import { object, string, number, boolean, array, mixed } from 'yup'

export interface InvestmentDetails {
  // minChars = 2, maxChars = 30
  fullName: string

  // initial investment, min=100 euros
  initialInvestment: number

  // investment risk the client wants to take
  // show 3 Checkboxes - "High", "Medium", "Low"
  // at least one is mandatory
  investmentRisk: Array<'High' | 'Medium' | 'Low'>

  // this field is dependent on investmentRisk
  // It is mandatory only if the client selects
  // High investmentRisk
  // textarea = minChars = 20, max=100
  commentAboutInvestmentRisk: string

  // select field starting with Select...
  // number of dependents is mandatory from 0 up to 5
  dependents: number

  // the user has to accept the terms and conditions
  acceptedTermsAndConditions: boolean
}

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false,
}

export default function FormDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>

        <Formik
          validationSchema={object({
            fullName: string()
              .required('Your name is mandatory')
              .min(2)
              .max(100),
            initialInvestment: number().required().min(100),
            dependents: number().required().min(0).max(5),
            acceptedTermsAndConditions: boolean().oneOf([true]),
            investmentRisk: array(
              string().oneOf(['high', 'medium', 'low'])
            ).min(1),
            commentAboutInvestmentRisk: mixed().when('investmentRisk', {
              is: (investmentRisk: string[]) =>
                investmentRisk.find((ir) => ir === 'high'),
              then: string().required().min(20).max(100),
              otherwise: string().min(20).max(100),
            }),
          })}
          initialValues={initialValues}
          onSubmit={(values, formikHelpers) => {
            return new Promise((res: any) => {
              setTimeout(() => {
                console.log(values)
                console.log(formikHelpers)
                console.log('------------')
                res()
              }, 5000)
            })
          }}
        >
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                  <ErrorMessage name="fullName" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="initialInvestment"
                    type="number"
                    as={TextField}
                    label="Initial Investment"
                  />
                  <ErrorMessage name="initialInvestment" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox name="investmentRisk" value="high" label="High" />
                  <MyCheckbox
                    name="investmentRisk"
                    value="medium"
                    label="Medium"
                  />
                  <MyCheckbox name="investmentRisk" value="low" label="Low" />
                  <ErrorMessage name="unvestmentRisk" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    multiline
                    rows={3}
                    rowsMax={10}
                    label="Comment About Investment Risk"
                  />
                  <ErrorMessage name="commentAboutInvestmentRisk" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="dependents"
                    as={TextField}
                    select
                    label="dependents"
                  >
                    <MenuItem value={-1}>Select...</MenuItem>

                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <ErrorMessage name="dependents" />
                </FormGroup>
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions" />
                </FormGroup>
              </Box>
              <Button type="submit" disabled={isSubmitting || isValidating}>
                Submit
              </Button>
              <pre>{JSON.stringify(errors, null, 4)}</pre>

              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export interface MyCheckboxProps extends CheckboxProps {
  name: string
  value?: string | number
  label?: string
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value,
  })
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  )
}
